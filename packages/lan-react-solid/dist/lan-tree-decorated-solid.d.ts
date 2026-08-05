import React from 'react';

export interface LanTreeDecoratedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreeDecoratedSolid(props: LanTreeDecoratedSolidProps): React.ReactElement;
export default LanTreeDecoratedSolid;
