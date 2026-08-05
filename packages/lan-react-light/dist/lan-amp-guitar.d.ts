import React from 'react';

export interface LanAmpGuitarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAmpGuitar(props: LanAmpGuitarProps): React.ReactElement;
export default LanAmpGuitar;
