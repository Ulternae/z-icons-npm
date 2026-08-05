import React from 'react';

export interface LanFilePngProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePng(props: LanFilePngProps): React.ReactElement;
export default LanFilePng;
