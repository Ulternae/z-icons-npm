import React from 'react';

export interface LanBootHeeledRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBootHeeledRegular(props: LanBootHeeledRegularProps): React.ReactElement;
export default LanBootHeeledRegular;
