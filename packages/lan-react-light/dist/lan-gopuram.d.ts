import React from 'react';

export interface LanGopuramProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGopuram(props: LanGopuramProps): React.ReactElement;
export default LanGopuram;
