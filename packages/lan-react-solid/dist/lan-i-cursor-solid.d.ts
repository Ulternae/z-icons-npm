import React from 'react';

export interface LanICursorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanICursorSolid(props: LanICursorSolidProps): React.ReactElement;
export default LanICursorSolid;
