import React from 'react';

export interface LanTurntableThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTurntableThin(props: LanTurntableThinProps): React.ReactElement;
export default LanTurntableThin;
