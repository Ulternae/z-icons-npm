import React from 'react';

export interface LanRampLoadingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRampLoadingSolid(props: LanRampLoadingSolidProps): React.ReactElement;
export default LanRampLoadingSolid;
