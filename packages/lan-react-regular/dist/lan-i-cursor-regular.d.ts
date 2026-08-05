import React from 'react';

export interface LanICursorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanICursorRegular(props: LanICursorRegularProps): React.ReactElement;
export default LanICursorRegular;
