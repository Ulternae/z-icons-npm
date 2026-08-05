import React from 'react';

export interface LanFilePptProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePpt(props: LanFilePptProps): React.ReactElement;
export default LanFilePpt;
