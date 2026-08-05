import React from 'react';

export interface LanUserTagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserTag(props: LanUserTagProps): React.ReactElement;
export default LanUserTag;
