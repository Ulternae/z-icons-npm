import React from 'react';

export interface LanSquidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquid(props: LanSquidProps): React.ReactElement;
export default LanSquid;
