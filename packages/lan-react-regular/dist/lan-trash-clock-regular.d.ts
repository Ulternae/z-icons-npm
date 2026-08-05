import React from 'react';

export interface LanTrashClockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashClockRegular(props: LanTrashClockRegularProps): React.ReactElement;
export default LanTrashClockRegular;
