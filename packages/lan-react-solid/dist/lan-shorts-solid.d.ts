import React from 'react';

export interface LanShortsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShortsSolid(props: LanShortsSolidProps): React.ReactElement;
export default LanShortsSolid;
