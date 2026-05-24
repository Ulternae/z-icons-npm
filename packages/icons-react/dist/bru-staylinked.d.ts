import React from 'react';

export interface BruStaylinkedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruStaylinked: React.FC<BruStaylinkedProps>;
export default BruStaylinked;
