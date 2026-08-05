import React from 'react';

export interface LanFacePerseveringSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFacePerseveringSolid(props: LanFacePerseveringSolidProps): React.ReactElement;
export default LanFacePerseveringSolid;
