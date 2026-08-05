import React from 'react';

export interface LanChampagneGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChampagneGlass(props: LanChampagneGlassProps): React.ReactElement;
export default LanChampagneGlass;
