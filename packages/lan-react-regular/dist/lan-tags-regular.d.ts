import React from 'react';

export interface LanTagsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTagsRegular(props: LanTagsRegularProps): React.ReactElement;
export default LanTagsRegular;
