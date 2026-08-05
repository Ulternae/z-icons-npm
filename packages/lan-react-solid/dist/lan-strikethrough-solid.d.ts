import React from 'react';

export interface LanStrikethroughSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStrikethroughSolid(props: LanStrikethroughSolidProps): React.ReactElement;
export default LanStrikethroughSolid;
