import React from 'react';

export interface LanObjectExcludeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectExcludeRegular(props: LanObjectExcludeRegularProps): React.ReactElement;
export default LanObjectExcludeRegular;
