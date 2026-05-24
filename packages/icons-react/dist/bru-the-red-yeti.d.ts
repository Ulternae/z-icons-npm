import React from 'react';

export interface BruTheRedYetiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruTheRedYeti: React.FC<BruTheRedYetiProps>;
export default BruTheRedYeti;
