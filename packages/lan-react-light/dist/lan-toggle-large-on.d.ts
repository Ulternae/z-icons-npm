import React from 'react';

export interface LanToggleLargeOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToggleLargeOn(props: LanToggleLargeOnProps): React.ReactElement;
export default LanToggleLargeOn;
