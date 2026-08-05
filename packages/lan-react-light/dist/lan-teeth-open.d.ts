import React from 'react';

export interface LanTeethOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTeethOpen(props: LanTeethOpenProps): React.ReactElement;
export default LanTeethOpen;
