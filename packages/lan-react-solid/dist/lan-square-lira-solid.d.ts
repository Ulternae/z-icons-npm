import React from 'react';

export interface LanSquareLiraSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareLiraSolid(props: LanSquareLiraSolidProps): React.ReactElement;
export default LanSquareLiraSolid;
