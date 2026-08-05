import React from 'react';

export interface LanPoliceBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPoliceBox(props: LanPoliceBoxProps): React.ReactElement;
export default LanPoliceBox;
