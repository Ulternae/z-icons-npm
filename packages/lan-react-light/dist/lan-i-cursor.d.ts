import React from 'react';

export interface LanICursorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanICursor(props: LanICursorProps): React.ReactElement;
export default LanICursor;
