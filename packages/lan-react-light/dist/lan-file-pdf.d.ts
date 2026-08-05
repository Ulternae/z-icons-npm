import React from 'react';

export interface LanFilePdfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePdf(props: LanFilePdfProps): React.ReactElement;
export default LanFilePdf;
