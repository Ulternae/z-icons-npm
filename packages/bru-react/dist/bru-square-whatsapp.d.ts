import React from 'react';

export interface BruSquareWhatsappProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareWhatsapp(props: BruSquareWhatsappProps): React.ReactElement;
export default BruSquareWhatsapp;
