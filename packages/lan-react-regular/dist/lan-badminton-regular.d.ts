import React from 'react';

export interface LanBadmintonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadmintonRegular(props: LanBadmintonRegularProps): React.ReactElement;
export default LanBadmintonRegular;
