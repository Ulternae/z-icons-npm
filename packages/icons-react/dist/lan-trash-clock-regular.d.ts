import React from 'react';

export interface LanTrashClockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashClockRegular: React.FC<LanTrashClockRegularProps>;
export default LanTrashClockRegular;
