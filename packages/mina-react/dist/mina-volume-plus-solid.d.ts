import React from 'react';

export interface MinaVolumePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaVolumePlusSolid(props: MinaVolumePlusSolidProps): React.ReactElement;
export default MinaVolumePlusSolid;
