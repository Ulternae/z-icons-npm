import React from 'react';

export interface LanICursorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanICursorThin(props: LanICursorThinProps): React.ReactElement;
export default LanICursorThin;
