import React from 'react';

export interface LanBookAtlasSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookAtlasSolid(props: LanBookAtlasSolidProps): React.ReactElement;
export default LanBookAtlasSolid;
