import React from 'react';

export interface LanFileTexProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileTex(props: LanFileTexProps): React.ReactElement;
export default LanFileTex;
