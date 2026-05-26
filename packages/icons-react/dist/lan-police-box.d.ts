import React from 'react';

export interface LanPoliceBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPoliceBox: React.FC<LanPoliceBoxProps>;
export default LanPoliceBox;
