import React from 'react';

export interface LanChampagneGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChampagneGlassSolid(props: LanChampagneGlassSolidProps): React.ReactElement;
export default LanChampagneGlassSolid;
