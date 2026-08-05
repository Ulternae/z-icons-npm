import React from 'react';

export interface LanFilePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePlus(props: LanFilePlusProps): React.ReactElement;
export default LanFilePlus;
