import React from 'react';

export interface LanMonkeySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMonkeySolid(props: LanMonkeySolidProps): React.ReactElement;
export default LanMonkeySolid;
