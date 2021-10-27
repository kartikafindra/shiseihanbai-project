import React from 'react';
import ReactPDF, {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
} from '@react-pdf/renderer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Card from './Card';
import { useFetchData } from '../Config/Context';

const RenderPDF = () => {
  const {data, setData, newData, setNewData} = useFetchData();
	function printDocument() {
		const input = document.getElementById('divToPrint');
		html2canvas(input).then((canvas) => {
			const imgData = canvas.toDataURL('image/png');
			const pdf = new jsPDF();
			pdf.addImage(imgData, 'JPEG', 100, 100);
			// pdf.output('dataurlnewwindow');
			pdf.save('download.pdf');
		});
	}
	return (
		<div>
			<div className="mb5">
				<button onClick={printDocument}>Print</button>
			</div>
			<div
				id="divToPrint"
				className="mt4"
			>
				{newData.map((data, index) => {
            return(
              <Card data={data} key={index}/>
            )
          })}
			</div>
		</div>
	);
};

// ReactPDF.render(<RenderPDF />);
export default RenderPDF;
