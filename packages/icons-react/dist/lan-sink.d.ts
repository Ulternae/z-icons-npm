import React from 'react';

export interface LanSinkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSink: React.FC<LanSinkProps>;
export default LanSink;
