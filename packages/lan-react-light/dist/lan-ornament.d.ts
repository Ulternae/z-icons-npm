import React from 'react';

export interface LanOrnamentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOrnament(props: LanOrnamentProps): React.ReactElement;
export default LanOrnament;
