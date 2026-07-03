import React from 'react';

export interface BruWhatsappProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruWhatsapp(props: BruWhatsappProps): React.ReactElement;
export default BruWhatsapp;
