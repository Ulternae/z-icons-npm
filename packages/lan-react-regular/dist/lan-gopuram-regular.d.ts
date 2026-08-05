import React from 'react';

export interface LanGopuramRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGopuramRegular(props: LanGopuramRegularProps): React.ReactElement;
export default LanGopuramRegular;
