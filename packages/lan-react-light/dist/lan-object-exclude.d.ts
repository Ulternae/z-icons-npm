import React from 'react';

export interface LanObjectExcludeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectExclude(props: LanObjectExcludeProps): React.ReactElement;
export default LanObjectExclude;
