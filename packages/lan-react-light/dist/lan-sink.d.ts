import React from 'react';

export interface LanSinkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSink(props: LanSinkProps): React.ReactElement;
export default LanSink;
