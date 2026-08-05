import React from 'react';

export interface LanWindowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindow(props: LanWindowProps): React.ReactElement;
export default LanWindow;
