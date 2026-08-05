import React from 'react';

export interface LanToggleOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToggleOn(props: LanToggleOnProps): React.ReactElement;
export default LanToggleOn;
