import React from 'react';

export interface MinaEditProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEdit: React.FC<MinaEditProps>;
export default MinaEdit;
