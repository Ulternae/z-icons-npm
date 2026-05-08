import React from 'react';

export interface MinaPaintProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPaint: React.FC<MinaPaintProps>;
export default MinaPaint;
