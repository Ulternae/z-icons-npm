import React from 'react';

export interface LanPersonThroughWindowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonThroughWindow(props: LanPersonThroughWindowProps): React.ReactElement;
export default LanPersonThroughWindow;
