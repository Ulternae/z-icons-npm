import React from 'react';

export interface LanVrCardboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVrCardboard(props: LanVrCardboardProps): React.ReactElement;
export default LanVrCardboard;
