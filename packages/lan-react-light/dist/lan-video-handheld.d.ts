import React from 'react';

export interface LanVideoHandheldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoHandheld(props: LanVideoHandheldProps): React.ReactElement;
export default LanVideoHandheld;
