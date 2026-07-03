import React from 'react';

export interface BruZhihuProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruZhihu(props: BruZhihuProps): React.ReactElement;
export default BruZhihu;
