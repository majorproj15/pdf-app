import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-pdf-creation',
  imports: [],
  templateUrl: './pdf-creation.component.html',
  styleUrl: './pdf-creation.component.scss'
})
export class PdfCreationComponent {

  convert() {
    var headers: any = this.createHeaders([
      "id",
      "coin",
      "game_group",
      "game_name",
      "game_version",
      "machine",
      "vlt"
    ]);
    
    var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "portrait" });
    doc.table(1, 1, this.generateData(100), headers, { autoSize: true });
    doc.save('Test.pdf');

  }

  print() {
    var headers: any = this.createHeaders([
      "id",
      "coin",
      "game_group",
      "game_name",
      "game_version",
      "machine",
      "vlt"
    ]);
    
    var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "portrait" });
    doc.table(1, 1, this.generateData(100), headers, { autoSize: true });
    doc.autoPrint();

    doc.autoPrint({variant: 'non-conform'});
    doc.save('autoprint.pdf');
  }



  generateData(amount: any) {
    var result = [];
    var data: any = {
      coin: "100",
      game_group: "GameGroup",
      game_name: "XPTO2",
      game_version: "25",
      machine: "20485861",
      vlt: "0"
    };
    for (var i = 0; i < amount; i += 1) {
      data.id = (i + 1).toString();
      result.push(Object.assign({}, data));
    }
    return result;
  };
  
  createHeaders(keys: any) {
    var result = [];
    for (var i = 0; i < keys.length; i += 1) {
      result.push({
        id: keys[i],
        name: keys[i],
        prompt: keys[i],
        width: 65,
        align: "center",
        padding: 0
      });
    }
    return result;
  }
  
  
  
}
