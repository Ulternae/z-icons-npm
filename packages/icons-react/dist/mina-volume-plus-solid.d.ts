import React from 'react';

export interface MinaVolumePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaVolumePlusSolid: React.FC<MinaVolumePlusSolidProps>;
export default MinaVolumePlusSolid;
